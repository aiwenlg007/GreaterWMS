import aiohttp


async def fetch_data(data):
    url = 'https://test.com/asgihandler/' # 用户这里自己修改
    async with aiohttp.ClientSession() as session:
        async with session.post(url, json=data) as response:
            response_text = await response.json()
            return response_text
