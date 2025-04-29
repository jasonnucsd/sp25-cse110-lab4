1. 3 is printed since i is still accessible.
2. 150 is printed since the most recent value of discountedPrice was 150.
3. 150 is printed since the most recent finalPrice was 150.
4. [ 50, 100, 150 ] is returned because each input price was halved.
5. Error returned, i is no longer accessible due to let.
6. Same as above but for discountedPrice.
7. 150 returned because discounted in same scope.
8. [ 50, 100, 150 ] is returned because the value of discounted is handed off to the call of discountPrices.
9. Error, i is still undefined like question 5.
10. 3 is returned since length isn't modified after initialization.
11. [ 50, 100, 150 ] because discounted is not being modified after initialization, even if it's pushed to.
12. 
    1.  student.name
    2.  student['Grad Year']
    3.  student.greeting();
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[0]
13. 
    1.  "32"            concatenation
    2.  1               arithmetic
    3.  3               null treated as 0
    4.  "3null"         concatenation
    5.  4               true treated as 1
    6.  0               both treated as 0
    7.  "3undefined"    concatenation
    8.  NaN             attempted arithmetic
14. 
    1.  true            arithmetic comparison
    2.  false           string comparison
    3.  true            arithmetic comparison
    4.  false           comparison without conversion
    5.  false           true treated as 1
    6.  true            both types strictly equal
15. == compares with conversions following rules, === requires strict equality without conversions. 