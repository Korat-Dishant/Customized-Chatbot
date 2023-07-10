from llama_index import SimpleDirectoryReader, GPTListIndex, readers, GPTVectorStoreIndex, LLMPredictor, PromptHelper, ServiceContext
from llama_index import StorageContext, load_index_from_storage

from langchain import OpenAI
import sys
import os
from IPython.display import Markdown, display
from dotenv import load_dotenv
import openai
load_dotenv()

def construct_index(directory_path):
    openai.api_key = os.getenv('API_KEY')

    # set maximum input size
    max_input_size = 4096
    # set number of output tokens
    num_outputs = 2000
    # set maximum chunk overlap
    # max_chunk_overlap = 20
    chunk_overlap_ratio = 0.1
    # set chunk size limit
    chunk_size_limit = 600 

    # define prompt helper
    # prompt_helper = PromptHelper(max_input_size, num_outputs, max_chunk_overlap, chunk_size_limit=chunk_size_limit)
    prompt_helper = PromptHelper(max_input_size, num_outputs, chunk_overlap_ratio, chunk_size_limit=chunk_size_limit)

    # define LLM
    llm_predictor = LLMPredictor(llm=OpenAI(temperature=0.5, model_name="text-davinci-003", max_tokens=num_outputs))
 
    documents = SimpleDirectoryReader(directory_path).load_data()
    
    service_context = ServiceContext.from_defaults(llm_predictor=llm_predictor, prompt_helper=prompt_helper)
    index = GPTVectorStoreIndex.from_documents(documents, service_context=service_context)


    # index.save_to_disk('index/index.json')
    index.storage_context.persist(persist_dir="index")


    return index



def ask_ai(query):
    response = query_engine.query(query)
    return response

os.environ["OPENAI_API_KEY"] = os.getenv('API_KEY')
construct_index("data")

storage_context = StorageContext.from_defaults(persist_dir="index")
index = load_index_from_storage(storage_context)
query_engine = index.as_query_engine()
