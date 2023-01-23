<section className="cards-wrapper">
{reviews.map((review) => { 
return  <div className="card-grid-space" key={review.review_id}>
        <Link to={`/reviews/${review.review_id}`} className="card-link">
        <div className="card" style={{"--bg-img": `url(${review.review_img_url})`}}>
        <div>
        <h1>{review.title}</h1>
        <p>{review.owner}</p>
        <div className="date">{review.created_at.slice(0, 10)}</div>
        <div className="tags">
        <div className="tag">{review.category}</div>
        </div>
        </div>
        </div>
        </Link>
        </div>
})}
</section>