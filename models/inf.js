const XLSX = require("xlsx");

function abc(doc) {
  const students = [
    {
      name: doc.name,
      username: doc.username,
      email: doc.email,
      phone: doc.phone,
      password: doc.password,
      collegeName: doc.collegeName,
      gender: doc.gender,
    },
  ];

  const workSheet = XLSX.utils.json_to_sheet(students);
  const workBook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workBook, workSheet, "students");
  // Generate buffer
  XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });

  // Binary string
  XLSX.write(workBook, { bookType: "xlsx", type: "binary" });

  XLSX.writeFile(workBook, "studentsData.xlsx");
}

// function abc() {
//   // Require library
//   var xl = require("excel4node");

//   // Create a new instance of a Workbook class
//   var wb = new xl.Workbook();

//   // Add Worksheets to the workbook
//   var ws = wb.addWorksheet("Sheet 1");
//   var ws2 = wb.addWorksheet("Sheet 2");

//   // Create a reusable style
//   var style = wb.createStyle({
//     font: {
//       color: "#FF0800",
//       size: 12,
//     },
//     numberFormat: "$#,##0.00; ($#,##0.00); -",
//   });

//   // Set value of cell A1 to 100 as a number type styled with paramaters of style
//   ws.cell(1, 1).number(100).style(style);

//   // Set value of cell B1 to 200 as a number type styled with paramaters of style
//   ws.cell(1, 2).number(200).style(style);

//   // Set value of cell C1 to a formula styled with paramaters of style
//   ws.cell(1, 3).formula("A1 + B1").style(style);

//   // Set value of cell A2 to 'string' styled with paramaters of style
//   ws.cell(2, 1).string("string").style(style);

//   // Set value of cell A3 to true as a boolean type styled with paramaters of style but with an adjustment to the font size.
//   ws.cell(3, 1)
//     .bool(true)
//     .style(style)
//     .style({ font: { size: 14 } });

//   wb.write("Excel.xlsx");
// }
module.exports = abc;
