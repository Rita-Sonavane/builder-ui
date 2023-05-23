import fetchMock from "fetch-mock";
import $ from 'jquery';
test('makes a jquery AJAX POST request to the correct URL',()=>{

    const mockResponse ={data:'1234'};
    fetchMock.post('http://localhost:3000/builderdb/',mockResponse);

    // perform the jquery Ajax call
    $.ajax({
        type:'POST',
        url:'http://localhost:3000/builderdb/',
        success:function(response){
            expect(response).toEqual(mockResponse);
        }
    })
})