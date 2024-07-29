// app/api/subscribe/route.js
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  const { email } = await request.json();

  // Validate email
  if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  const filePath = path.resolve("email.json");

  // Read existing emails
  let emailList = [];
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, "utf-8");
    emailList = JSON.parse(fileData);
  }
  // Check if email already exists
  if (emailList.includes(email.toLowerCase())) {
    return NextResponse.json(
      { message: "Email saved successfully" },
      { status: 200 }
    );
  }

  // Save the new email
  emailList.push(email.toLowerCase());

  // Write back to the file
  fs.writeFileSync(filePath, JSON.stringify(emailList, null, 2));

  return NextResponse.json(
    { message: "Email saved successfully" },
    { status: 200 }
  );

  // Add the new email
  emailList.push(email);

  // Write back to the file
  fs.writeFileSync(filePath, JSON.stringify(emailList, null, 2));

  return NextResponse.json(
    { message: "Email saved successfully" },
    { status: 200 }
  );
}
