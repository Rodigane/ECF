import db from "../db/index.cjs";

// * Get all suites from a specific hotel

export const getSuites = async (req, res) => {
  try {
    const results = await db.query("select * from suites where hotel_id = $1", [
      req.params.hotel_id,
    ]);
    console.log(results.rows);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        suites: results.rows,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

// * Get a suite
export const getSuite = async (req, res) => {
  console.log(req.params.suite_id);
  try {
    const results = await db.query("select * from suites where suite_id = $1", [
      req.params.suite_id,
    ]);
    console.log(req.params.suite_id);
    console.log(results.rows);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        suites: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
};

// * create a suite
export const createSuite = async (req, res) => {
  const suite = req.body;
  //console.log(suite);
  console.log(req.params.hotel_id);
  try {
    const results = await db.query(
      "INSERT INTO suites (title, image, description, image_gallery, booking_link, price, hotel_id) values ($1, $2, $3, $4, $5, $6, $7) returning *",
      [
        suite.title,
        suite.image,
        suite.description,
        suite.image_gallery,
        suite.booking_link,
        suite.price,
        req.params.hotel_id,
      ]
    );
    console.log(results);
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        suites: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateSuite = async (req, res) => {
  console.log("request recieve");
  const suite_id = req.params.suite_id;
  const suite = req.body.body;
  console.log(suite_id);

  console.log(suite);
  try {
    const results = await db.query(
      "UPDATE suites SET title = $1, image=$2, description = $3, image_gallery = $4, booking_link = $5, price = $6 WHERE suite_id = $7 RETURNING *",
      [
        suite.title,
        suite.image,
        suite.description,
        suite.image_gallery,
        suite.booking_link,
        suite.price,
        suite_id,
      ]
    );
    res.status(200).json({
      status: "sucess",
      results: results.rows.length,
      data: {
        suites: results.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteSuite = async (req, res) => {
  const suite_id = req.params.suite_id;
  console.log(suite_id);
  try {
    const results = await db.query("DELETE FROM suites where suite_id = $1", [
      suite_id,
    ]);
    res.status(200).json(console.log("delete successfull"));
  } catch (error) {
    console.error(error);
  }
};
