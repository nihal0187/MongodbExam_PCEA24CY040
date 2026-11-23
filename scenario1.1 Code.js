
const college = db.getSiblingDB("college");

college.students.deleteMany({});

print("STEP 1: Insert One Student");
printjson(college.students.insertOne({
    rollNo: 101,
    name: "Arun",
    dept: "CSE",
    marks: 78,
    city: "Chennai"
}));

print("STEP 2: Insert Four Students");
printjson(college.students.insertMany([
    {rollNo: 102, name: "Priya", dept: "ECE", marks: 85, city: "Delhi"},
    {rollNo: 103, name: "Karthik", dept: "CSE", marks: 62, city: "Chennai"},
    {rollNo: 104, name: "Rahul", dept: "ECE", marks: 75, city: "Mumbai"},
    {rollNo: 105, name: "Suresh", dept: "CSE", marks: 91, city: "Trichy"}
]));

print("STEP 3: All Students");
college.students.find().forEach(printjson);

print("CSE Students");
college.students.find({dept: "CSE"}).forEach(printjson);

print("STEP 4: Update Marks");
printjson(college.students.updateOne(
    {rollNo: 103},
    {$set: {marks: 68}}
));

print("STEP 5: Add Semester");
printjson(college.students.updateMany(
    {dept: "CSE"},
    {$set: {semester: 3}}
));

print("STEP 6: Delete Student");
printjson(college.students.deleteOne({rollNo: 104}));

print("STEP 7: Remaining Students");
print(college.students.countDocuments());
