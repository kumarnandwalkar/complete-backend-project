// this construction is defined cuz whenever anyone wants
// to send an api respoce and he should be using the api response
// file, and we will set this compulsion by middleware and 
// this attributes of constructor will be compulsory to use


class ApiResponse {
    constructor(statuscode, data, message = "sucess"){
        this.statuscode = statuscode;
        this.data = data;
        this.message = message;
        this.success = statuscode < 400
    }
}

export {ApiResponse}