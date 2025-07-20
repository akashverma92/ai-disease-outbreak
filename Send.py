import nexmo
def send_message(api_key, api_secret, sender, recipient, message):
    client = nexmo.Client(key=api_key, secret=api_secret)
    response = client.send_message({
        'from': sender,
        'to': recipient,
        'text': message
    })

    if response['messages'][0]['status'] == '0':
        print('Message sent successfully.')
    else:
        print(f'Message failed with error: {response["messages"][0]["error-text"]}')

api_key = '531bc2e1'  
api_secret = 'XgEWk8Wc2Wx4P883'  
sender = 'Vonage'  
recipient = '+919263830382' 
message = 'Hello, Covid-19 is caused by the SARS-CoV-2 virus.'
send_message(api_key, api_secret, sender, recipient, message)
