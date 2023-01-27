class BlogCard extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<div class="box_wrap ${this.attributes.className ? this.attributes.className.value : ''}">
				<div class="box_img">
					<img src="${this.attributes.image.value}" alt="box image" class="img-fluid" />
				</div>
				<div class="box_content">
					<div class="box_meta mb-3">
						<strong class="category">${this.attributes.category.value}</strong>
						<span class="seprator">-</span>
						<span class="box_date">${this.attributes.date.value}</span>
					</div>
					<a href="single-post.html">
						<h2 class="box_heading">${this.attributes.title.value}</h2>
					</a>
					<p class="box_main_para">${this.attributes.description ? this.attributes.description.value : ''}</p>
					<div class="box_user_info align-items-center d-flex">
						<div class="user_img">
							<img src="${this.attributes.authorImage.value}" alt="user image" class="img-fluid" />
						</div>
						<div class="user_details">
							<h4>${this.attributes.authorName.value}</h4>
							<p>${this.attributes.authorDesignation.value}</p>
						</div>
					</div>
				</div>
			</div>
		`;
	}
}

customElements.define('blog-card', BlogCard);