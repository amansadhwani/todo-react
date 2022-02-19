const mockResponse = {
    data:[
        {
            name:"aman"
        },
        {
            name:"rafael"
        }
    ]

    
}

export default {
    get:jest.fn.mockResolvedValue(mockResponse)
}