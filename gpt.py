import openai

openai.api_key ="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"

completion = openai.ChatCompletion.create(model="gpt",messages=[{"role": "user", "content": "Who won the world series in 2020?"}])
print(completion.choices[0].message.content)