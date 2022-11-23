import { Button } from "react-bootstrap";
const Pagenation = ({ page, setPage, limit, totalItem }) => {
  const numPages = Math.ceil(totalItem / limit);
  const pages = [];
  for (let i = 1; i <= numPages; i++) {
    pages.push(i);
  }
  return (
    <div className="page-area">
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {pages.map((num) => (
        <Button
          variant={page === num ? "primary" : "outline-primary"}
          className="btn"
          key={num}
          onClick={() => setPage(num)}
        >
          {num}
        </Button>
      ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </div>
  );
};

export default Pagenation;
