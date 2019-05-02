import requests

URL = 'http://localhost:5000/api/v1/post'

def makeInput():
    mydict = {'a': 1, 'b':'hi'}
    return mydict 

def sendRequest(inputDict):
    r = requests.post(URL, json=inputDict)
    return r.json()

if __name__ == '__main__':
    response = sendRequest(makeInput())
    print(response)
