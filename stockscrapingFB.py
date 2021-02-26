import re
import json
import csv
from io import StringIO
from bs4 import BeautifulSoup
import requests
from csv import writer
import yfinance as yf


stock_url = 'https://query1.finance.yahoo.com/v7/finance/download/FB?period1=463363200&period2=1614211200&interval=1d&events=history&includeAdjustedClose=true'

response = requests.get(stock_url)

file = StringIO(response.text)
reader = csv.reader(file)
data = list(reader)

x = []
    # print all the historical data
for row in data:
    print(row)
    x = row

with open(r'FB_stocks.csv', 'w') as stock_object:
    writer_object = writer(stock_object) 
    
        # Pass the list as an argument into 
        # the writerow()
    for row in data: 
        writer_object.writerow(row) 
    
        #Close the file object 
    stock_object.close() 