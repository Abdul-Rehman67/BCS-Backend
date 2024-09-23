const { response } = require("../dto/send.response");
const { addBooksService, getAllBookService, CheckedOut, CheckedIn, updateBookService, deleteBookService } = require("../services/book");
const addBookController = async (req, res) => {
  try {

    let payload = req.body.payload;    
    console.log(payload)
    let result = await addBooksService(payload,req.email);
    if(result.duplicates.length>0 && result.results.length>0) {
      return res.status(200).send(response(false , "Book added successfully. Duplicate entries were found and ignored", {}));
    }
    else if (result.results.length>0) {
      return res.status(200).send(response(true, 'Book added successfully', {}));
    } 
    else if(result.duplicates.length>0) {
      return res.status(200).send(response(false , "A book(s) with this name already exists in your collection", {}));
    }
  }
  catch (e) {
    console.log(e)
    return res.status(500).send(response(false, "Server Error!", {}));
  }
};
const getAllBookController = async (req, res) => {
  try {
    let result = await getAllBookService(req.email);
    if (result) {
      return res.status(result.code).send(response(result.status, result.message, result.book));
    } else {
      return res.status(result.code).send(response(result.status, result.message || "Something went wrong, Please try again later", {}));
    }
  }
  catch (e) {
    return res.status(500).send(response(false, "Server Error!", {}));
  }
};
const updateBookController = async (req, res) => {
  try {
    let payload = req.body.payload
    let result = await updateBookService(payload);
    if (result.status) {
      return res.status(200).send(response(result.status , result.message, {}));

    } else {
      return res.status(200).send(response(result.status , result.message, {}));
      
    }
  }
  catch (e) {
    return res.status(500).send(response(false, "Server Error!", {}));
  }
};
const deleteBookController = async (req, res) => {
  try {
    let id = req.params.id
    console.log(id)
    
    let result = await deleteBookService(id);
    if (result.status) {
      return res.status(200).send(response(result.status , result.message, {}));

    } else {
      return res.status(200).send(response(result.status , result.message, {}));
      
    }
  }
  catch (e) {
    return res.status(500).send(response(false, "Server Error!", {}));
  }
};


module.exports = { addBookController, getAllBookController, updateBookController,deleteBookController }

