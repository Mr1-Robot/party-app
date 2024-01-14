export default function SubmitButton({ loading, text }) {
  return (
    <button type="submit" className="main-btn" disabled={loading}>
      {loading ? "Submitting..." : text}
    </button>
  );
}
