import express from "express";

const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Xin chào từ Express trên Vercel!", time: new Date().toISOString() });
});

// Only listen when running locally. On Vercel, the platform handles requests.
if (!process.env.VERCEL) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export default app;


