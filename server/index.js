// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;
// const cors = require("cors");
// const dotenv = require("dotenv");
// const { ObjectId } = require("mongodb");
// const paymentRoutes = require("./routes/payment.js");
// const Razorpay = require("razorpay");

// //middlewares
// app.use(cors());
// app.use(express.json());
// app.use(require("body-parser").json());

// var instance = new Razorpay({
//   key_id: "rzp_test_PXGneS4dVm9z1H",
//   key_secret: "0JNR1QOuLTRtyJvGrpu3FUZx"
// })

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// //routes
// //app.use("/api/payment/", paymentRoutes);

// //mongodb configurations
// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://mern-study-store:F24nzj7ZR8xYoKOd@cluster0.2me2q5v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// // Connect to MongoDB and define bookCollection globally
// async function connectToDB() {
//   try {
//     // Connect to MongoDB
//     await client.connect();

//     // Define bookCollection globally
//     global.bookCollection = client.db("BookInventory").collection("books");

//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// // Call connectToDB function to establish connection
// connectToDB();

// // Define the insertBook function
// async function insertBook(data) {
//   try {
//     // Check if data has _id field, if not, MongoDB will generate it
//     if (!data._id) {
//       delete data._id; // Remove _id if it's null or undefined
//     }

//     // Perform insert operation using global bookCollection
//     const result = await bookCollection.insertOne(data);
//     return result;
//   } catch (error) {
//     throw new Error(`Error inserting book: ${error.message}`);
//   }
// }

// // Handle POST request for /upload-book
// app.post("/upload-book", async (req, res) => {
//   try {
//     const data = req.body;
//     const result = await insertBook(data);
//     res.send(result);
//     console.log("Book inserted successfully");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error inserting book");
//   }
// });

// // fetch all books
// app.get("/all-books", async (req, res) => {
//   try {
//     // Use global bookCollection to fetch all books
//     const books = await bookCollection.find().toArray();
//     res.send(books);
//     console.log("All book details fetched");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error fetching books");
//   }
// });

// // Fetch book data by ID
// app.get("/all-books/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const filter = { _id: new ObjectId(id) };
//     const result = await bookCollection.findOne(filter);
//     res.send(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Something is wrong" });
//   }
// });

// // Handle PATCH request for updating a book by ID
// app.patch("/book/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updateBookData = req.body;
//     const filter = { _id: new ObjectId(id) }; // Use ObjectId here
//     const options = { upsert: true };
//     const updateDoc = {
//       $set: {
//         ...updateBookData,
//       },
//     };

//     const result = await bookCollection.updateOne(filter, updateDoc, options);
//     res.send(result);
//     console.log("Book updated successfully");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error updating book");
//   }
// });

// //delete a book
// app.delete("/book/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const filter = { _id: new ObjectId(id) }; // Use ObjectId to create the filter
//     const result = await bookCollection.deleteOne(filter);
//     if (result.deletedCount === 1) {
//       res.send("Book deleted successfully");
//       console.log("Book deleted successfully");
//     } else {
//       res.status(404).send("Book not found");
//       console.log("Book not found");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error deleting book");
//   }
// });

// // //find the date by category
// // app.get("/all-book", async(req, res)=>){
// //     let query ={};
// //     if(req.query?.genre){
// //         query={category: req.query.genre}
// //     }
// //     const result= await bookCollection.find(query).toArray();
// //     res.send(result);
// // };

// // Handle GET request for finding books by genre
// app.get("/books/genre/:genre", async (req, res) => {
//   try {
//     const genre = req.params.genre;
//     const query = { genre: genre }; // Define the query to find books by genre
//     const books = await bookCollection.find(query).toArray();
//     if (books.length === 0) {
//       res.status(404).send(`Books in genre '${genre}' not found`);
//       console.log(`Books in genre '${genre}' not found`);
//     } else {
//       res.send(books);
//       console.log(`Books in genre '${genre}' fetched successfully`);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error fetching books by genre");
//   }
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require("express");
const cors = require("cors");
const { ObjectId } = require("mongodb");
const Razorpay = require("razorpay");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(require("body-parser").json());

// Razorpay Configuration
var instance = new Razorpay({
  key_id: "rzp_test_PXGneS4dVm9z1H",
  key_secret: "0JNR1QOuLTRtyJvGrpu3FUZx",
});

// app.get("/", (req, res) => {
//   res.sendFile("standard.html", { root: __dirname });
// });

app.post("/create/orderId", async (req, res) => {
  console.log("create orderId req", req.body);
  var options = {
    amount: Number(299 * 100),
    currency: "INR",
    receipt: "rcp_1",
  };
  const order = await instance.orders.create(options);
  // instance.orders.create(options, function (err, order) {
  //   console.log(order);
  //   res.send(order);
  // });
  res.status(200).json({
    success: true,
    order,
  });
});

app.post("/paymentverification", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
      `http://localhost:4000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
});

// router.route("/paymentverification").post( async (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//     req.body;

//   const body = razorpay_order_id + "|" + razorpay_payment_id;

//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
//     .update(body.toString())
//     .digest("hex");

//   const isAuthentic = expectedSignature === razorpay_signature;

//   if (isAuthentic) {
//     // Database comes here

//     await Payment.create({
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//     });

//     res.redirect(
//       `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
//     );
//   } else {
//     res.status(400).json({
//       success: false,
//     });
//   }}
// )

// MongoDB Configuration
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://mern-study-store:F24nzj7ZR8xYoKOd@cluster0.2me2q5v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect to MongoDB and define bookCollection globally
async function connectToDB() {
  try {
    await client.connect();
    global.bookCollection = client.db("BookInventory").collection("books");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call connectToDB function to establish connection
connectToDB();

// Utility functions
async function insertBook(data) {
  try {
    if (!data._id) {
      delete data._id;
    }
    const result = await bookCollection.insertOne(data);
    return result;
  } catch (error) {
    throw new Error(`Error inserting book: ${error.message}`);
  }
}

// Routes

// Home Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Upload Book Route
app.post("/upload-book", async (req, res) => {
  try {
    const data = req.body;
    const result = await insertBook(data);
    res.send(result);
    console.log("Book inserted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error inserting book");
  }
});

// Fetch All Books Route
app.get("/all-books", async (req, res) => {
  try {
    const books = await bookCollection.find().toArray();
    res.send(books);
    console.log("All book details fetched");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching books");
  }
});

// Fetch Book by ID Route
app.get("/all-books/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await bookCollection.findOne(filter);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something is wrong" });
  }
});

// Update Book by ID Route
app.patch("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateBookData = req.body;
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };
    const updateDoc = {
      $set: { ...updateBookData },
    };
    const result = await bookCollection.updateOne(filter, updateDoc, options);
    res.send(result);
    console.log("Book updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating book");
  }
});

// Delete Book by ID Route
app.delete("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await bookCollection.deleteOne(filter);
    if (result.deletedCount === 1) {
      res.send("Book deleted successfully");
      console.log("Book deleted successfully");
    } else {
      res.status(404).send("Book not found");
      console.log("Book not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting book");
  }
});

// Fetch Books by Genre Route
app.get("/books/genre/:genre", async (req, res) => {
  try {
    const genre = req.params.genre;
    const query = { genre: genre };
    const books = await bookCollection.find(query).toArray();
    if (books.length === 0) {
      res.status(404).send(`Books in genre '${genre}' not found`);
      console.log(`Books in genre '${genre}' not found`);
    } else {
      res.send(books);
      console.log(`Books in genre '${genre}' fetched successfully`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching books by genre");
  }
});

// Server Listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
