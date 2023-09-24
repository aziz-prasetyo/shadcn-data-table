import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "aziz@example.com",
    },
    {
      id: "8876yt67",
      amount: 230,
      status: "success",
      email: "billy@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "fadhil@gmail.com",
    },
    {
      id: "6y76sa81",
      amount: 300,
      status: "pending",
      email: "abiyyah@gmail.com",
    },
    {
      id: "ghyu776u",
      amount: 100,
      status: "failed",
      email: "john@gmail.com",
    },
    {
      id: "65uy15iu",
      amount: 120,
      status: "pending",
      email: "doe@gmail.com",
    },
    {
      id: "uuu765yt",
      amount: 120,
      status: "processing",
      email: "user1764@gmail.com",
    },
    {
      id: "as74r5ty",
      amount: 175,
      status: "processing",
      email: "user9999@gmail.com",
    },
    {
      id: "k71k80te",
      amount: 100,
      status: "success",
      email: "user5651@gmail.com",
    },
    {
      id: "hjy761ui",
      amount: 50,
      status: "success",
      email: "user1111@gmail.com",
    },
    {
      id: "ux12ui9q",
      amount: 95,
      status: "processing",
      email: "user6666@gmail.com",
    },
    {
      id: "jkh76at1",
      amount: 900,
      status: "success",
      email: "user8131@gmail.com",
    },
    {
      id: "abc12def",
      amount: 500,
      status: "pending",
      email: "user1234@gmail.com"
    },
    {
      id: "xyz34uvw",
      amount: 700,
      status: "failed",
      email: "user5678@gmail.com"
    },
    {
      id: "mno56pqr",
      amount: 300,
      status: "success",
      email: "user9101@gmail.com"
    },
    {
      id: "stu78vwx",
      amount: 1000,
      status: "pending",
      email: "user1121@gmail.com"
    },
    {
      id: "ghi90jkl",
      amount: 800,
      status: "failed",
      email: "user3141@gmail.com"
    },
    {
      id: "def23abc",
      amount: 600,
      status: "success",
      email: "user5161@gmail.com"
    },
    {
      id: "vwx45stu",
      amount: 200,
      status: "pending",
      email: "user7181@gmail.com"
    },
    {
      id: "pqr67mno",
      amount: 400,
      status: "failed",
      email: "user9202@gmail.com"
    },
    {
      id: "jkl89ghi",
      amount: 100,
      status: "success",
      email: "user1223@gmail.com"
    }
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
