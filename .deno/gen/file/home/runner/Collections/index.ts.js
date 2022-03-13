import Collection from "./Collection.ts";
const col = new Collection({
    key: "hello",
    value: "world"
}, {
    key: "foo",
    value: "bar"
});
col.addEntry({
    key: "k",
    value: "v"
}, {
    key: "key",
    value: "value"
});
for (const [k, v] of col) {
    console.log(k, v);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9ob21lL3J1bm5lci9Db2xsZWN0aW9ucy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FDekI7SUFDQyxHQUFHLEVBQUUsT0FBTztJQUNaLEtBQUssRUFBRSxPQUFPO0NBQ2QsRUFDRDtJQUNDLEdBQUcsRUFBRSxLQUFLO0lBQ1YsS0FBSyxFQUFFLEtBQUs7Q0FDWixDQUNELENBQUM7QUFFRixHQUFHLENBQUMsUUFBUSxDQUNYO0lBQ0MsR0FBRyxFQUFFLEdBQUc7SUFDUixLQUFLLEVBQUUsR0FBRztDQUNWLEVBQ0Q7SUFDQyxHQUFHLEVBQUUsS0FBSztJQUNWLEtBQUssRUFBRSxPQUFPO0NBQ2QsQ0FDRCxDQUFDO0FBRUYsS0FBSSxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBQztJQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztDQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2xsZWN0aW9uIGZyb20gXCIuL0NvbGxlY3Rpb24udHNcIjtcblxuY29uc3QgY29sID0gbmV3IENvbGxlY3Rpb24oXG5cdHtcblx0XHRrZXk6IFwiaGVsbG9cIixcblx0XHR2YWx1ZTogXCJ3b3JsZFwiXG5cdH0sXG5cdHtcblx0XHRrZXk6IFwiZm9vXCIsXG5cdFx0dmFsdWU6IFwiYmFyXCJcblx0fVxuKTtcblxuY29sLmFkZEVudHJ5KFxuXHR7XG5cdFx0a2V5OiBcImtcIixcblx0XHR2YWx1ZTogXCJ2XCJcblx0fSxcblx0e1xuXHRcdGtleTogXCJrZXlcIixcblx0XHR2YWx1ZTogXCJ2YWx1ZVwiXG5cdH1cbik7XG5cbmZvcihjb25zdCBbayx2XSBvZiBjb2wpe1xuXHRjb25zb2xlLmxvZyhrLHYpO1xufSJdfQ==