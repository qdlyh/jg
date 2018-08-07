#coding=utf-8
import urllib
import urllib.request
import re

def get_url(url):
    request = urllib.request.Request(url)
    requests = urllib.request.urlopen(url)
    data = urllib.request.read()
    return data
def get_img(html):
    http = r'http://[\S]*\.jpg'
    pattren = re.compile(http)
    imgbox = re.finditer(pattern,repr(html))
    mun = 0
    for img in imgbox:
        imgae = get_url(img)
        with open 
    return