DEBUG - response: 'Oi! Tudo bem, obrigado! E você?'
INFO:     10.144.7.245:62800 - "GET /answer/101?question=Oi,%20tudo%20bem? HTTP/1.1" 500 Internal Server Error
ERROR:    Exception in ASGI application
Traceback (most recent call last):
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/uvicorn/protocols/http/h11_impl.py", line 406, in run_asgi
    result = await app(  # type: ignore[func-returns-value]
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/uvicorn/middleware/proxy_headers.py", line 70, in __call__
    return await self.app(scope, receive, send)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/fastapi/applications.py", line 1054, in __call__
    await super().__call__(scope, receive, send)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/applications.py", line 113, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/middleware/errors.py", line 187, in __call__
    raise exc
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/middleware/errors.py", line 165, in __call__
    await self.app(scope, receive, _send)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/middleware/cors.py", line 93, in __call__
    await self.simple_response(scope, receive, send, request_headers=headers)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/middleware/cors.py", line 144, in simple_response
    await self.app(scope, receive, send)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/middleware/exceptions.py", line 62, in __call__
    await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/_exception_handler.py", line 62, in wrapped_app
    raise exc
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/_exception_handler.py", line 51, in wrapped_app
    await app(scope, receive, sender)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/routing.py", line 715, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/routing.py", line 735, in app
    await route.handle(scope, receive, send)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/routing.py", line 288, in handle
    await self.app(scope, receive, send)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/routing.py", line 76, in app
    await wrap_app_handling_exceptions(app, request)(scope, receive, send)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/_exception_handler.py", line 62, in wrapped_app
    raise exc
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/_exception_handler.py", line 51, in wrapped_app
    await app(scope, receive, sender)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/starlette/routing.py", line 73, in app
    response = await f(request)
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/fastapi/routing.py", line 301, in app
    raw_response = await run_endpoint_function(
  File "/Users/ccsl/iagenerativa_teste2/.env/lib/python3.9/site-packages/fastapi/routing.py", line 212, in run_endpoint_function
    return await dependant.call(**values)
  File "/Users/ccsl/noxtec/poc/rag/main.py", line 50, in predict
    answer, context = await prompt["main"].get_answer(question, chat_id=chat_id)
  File "/Users/ccsl/noxtec/poc/rag/prompt.py", line 143, in get_answer
    response_data = json.loads(response)
  File "/Library/Developer/CommandLineTools/Library/Frameworks/Python3.framework/Versions/3.9/lib/python3.9/json/__init__.py", line 346, in loads
    return _default_decoder.decode(s)
  File "/Library/Developer/CommandLineTools/Library/Frameworks/Python3.framework/Versions/3.9/lib/python3.9/json/decoder.py", line 337, in decode
    obj, end = self.raw_decode(s, idx=_w(s, 0).end())
  File "/Library/Developer/CommandLineTools/Library/Frameworks/Python3.framework/Versions/3.9/lib/python3.9/json/decoder.py", line 355, in raw_decode
    raise JSONDecodeError("Expecting value", s, err.value) from None
json.decoder.JSONDecodeError: Expecting value: line 1 column 1 (char 0)