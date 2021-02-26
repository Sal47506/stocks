import re
import json
import csv
from io import StringIO
from bs4 import BeautifulSoup
import requests
from csv import writer
import yfinance as yf
from pandas_datareader import data as pdr
import pandas as pd
import datetime
from datetime import date

yf.pdr_override() # <== that's all it takes :-)

# download dataframe using pandas_datareader
data = pdr.get_data_yahoo("FB", start=datetime.date.today(), end=datetime.date.today()+datetime.timedelta(days=1))

today_date = date.today()

data_iterator = pd.DataFrame(data)

print(data_iterator)


priceOpen = data['Open'].iloc[-1]
priceHigh = data['High'].iloc[-1]
priceLow = data['Low'].iloc[-1]
priceClose = data['Close'].iloc[-1]
priceAdj = data['Adj Close'].iloc[-1]
priceVolume = data['Volume'].iloc[-1]
df = pdr.get_data_yahoo("FB", start=datetime.date.today(), end=datetime.date.today()+datetime.timedelta(days=1)).reset_index()
df_month = df.loc[:,'Date'].iloc[-1].month
df_day = df.loc[:,'Date'].iloc[-1].day
df_year = df.loc[:,'Date'].iloc[-1].year
print(priceAdj)
print(date.today())
print(df_month)
print(df_day)
print(df_year)

date_format = datetime.datetime(df_year, df_month, df_day)
date_format = date_format.strftime("%Y-%m-%d")
print(date_format)


with open(r'FB_stocks.csv','a') as f:
    writer=csv.writer(f)
    writer.writerow([date_format, priceOpen, priceHigh, priceLow, priceClose, priceAdj, priceVolume])