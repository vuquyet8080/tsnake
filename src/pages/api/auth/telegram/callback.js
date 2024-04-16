export default function handler(req, res) {
  const { auth_data } = req.body;
  res.status(200).json({ success: true });
}
