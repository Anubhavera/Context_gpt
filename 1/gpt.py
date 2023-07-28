import os
import openai
openai.organization = "alan"
openai.api_key = os.getenv("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")
openai.Model.list()

openai.api_key ="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"


completion = openai.ChatCompletion.create(model="gpt",messages=[{"role": "user", "content": "Who won the world series in 2020?"}])
print(completion.choices[0].message.content)