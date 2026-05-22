import woman from "../assets/images/Comment/woman.jpg";
import whiteperson from "../assets/images/Comment/whiteperson.jpg";
import blackperson from "../assets/images/Comment/blackperson.jpg";

export default function Comment() {
  const comments = [
    {
      image: woman,
      name: "Aysel Məmmədova",
      text: "CBOTEL-də qalmaq çox xoş təcrübə idi. Otaqlar təmiz, personal isə çox mehriban idi. Yenidən gəlməyi düşünürəm.",
    },
    {
      image: whiteperson,
      name: "Elvin Əliyev",
      text: "Ailəmlə birlikdə burada istirahət etdik. Xidmət səviyyəsi, yeməklər və otaqlar çox yaxşı idi. Hər kəsə tövsiyə edirəm.",
    },
    {
      image: blackperson,
      name: "Michael Johnson",
      text: "I had a wonderful stay at CBOTEL. The rooms were comfortable, the staff was friendly, and the service was excellent.",
    },
  ];

  return (
    <section className="comments">
      <h1 className="comments-title">Müştəri Rəyləri</h1>

      <div className="comments-container">
        {comments.map((comment, index) => (
          <div className="comment-card" key={index}>
            <img src={comment.image} alt={comment.name} />

            <h2>{comment.name}</h2>

            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}