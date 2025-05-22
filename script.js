let age = "19";
if (age < 18) {
    console.log("თქვენ არ შეგიძლიათ მართვის მოწმობის აღება")
} else if (age >= 18) {
    console.log("თქვენ შეგიძლიათ მართვის მოწმობის აღება")
} else if (typeof age != Number) {
    console.log("მითითებული ასაკი არასწორია!")
} 