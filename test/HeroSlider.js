class HeroSlider {
	constructor(slider) {
		this.slider = slider;
		this.current = 0;
		this.duration = 5000;
		this.activeClass = "hero__slide-page--active";
		this.slides = Array.from(slider.querySelectorAll(".hero__slide"));
		this.pager = slider.querySelector(".hero__slide-pager");
		this.nav = slider.querySelector(".hero__slide-nav");

		if (!this.slides.length || !this.pager || !this.nav) {
			return;
		}

		this.bindEventHandlers();
		this.init();
	}

	get activePage() {
		return this.pager.children[this.current];
	}

	get prevControl() {
		return this.nav.children[0];
	}

	get nextControl() {
		return this.nav.children[1];
	}

	init() {
		this.updatePager();
		this.updateContent();
		this.startTimer();
	}

	bindEventHandlers() {
		this.prevControl.addEventListener("click", this.goBack.bind(this));
		this.nextControl.addEventListener("click", this.advance.bind(this));

		Array.from(this.pager.children).forEach((page, index) => {
			page.addEventListener("click", (event) => {
				event.preventDefault();
				this.changeSlide(index - this.current);
			});
		});
	}

	startTimer() {
		this.slides[this.current].classList.add("hero__slide--active");
		clearInterval(this.timer);
		this.timer = setInterval(this.advance.bind(this), this.duration);
	}

	advance(event) {
		event?.preventDefault();
		this.changeSlide();
	}

	goBack(event) {
		event?.preventDefault();
		this.changeSlide(-1);
	}

	changeSlide(step = 1) {
		this.current =
			this.current === 0 && step === -1
				? this.slides.length - 1
				: (this.current + step + this.slides.length) % this.slides.length;

		this.updatePager();
		this.updateContent();
		this.startTimer();
	}

	updatePager() {
		Array.from(this.pager.children).forEach((page) => {
			page.classList.remove(this.activeClass);
			page.style.setProperty("--progress", "0%");
		});

		this.activePage.classList.add(this.activeClass);
		this.animateProgress();
	}

	animateProgress() {
		let start = null;
		const activePage = this.activePage;

		cancelAnimationFrame(this.progressFrame);

		const update = (timestamp) => {
			if (activePage !== this.activePage) {
				return;
			}

			if (!start) {
				start = timestamp;
			}

			const elapsed = timestamp - start;
			const progress = Math.min((elapsed / this.duration) * 100, 100).toFixed(4);
			activePage.style.setProperty("--progress", `${progress}%`);

			if (elapsed < this.duration) {
				this.progressFrame = requestAnimationFrame(update);
			} else {
				activePage.style.setProperty("--progress", "0%");
			}
		};

		this.progressFrame = requestAnimationFrame(update);
	}

	updateContent() {
		this.slides.forEach((slide) => slide.classList.remove("hero__slide--active"));
		this.slides[this.current].classList.add("hero__slide--active");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".hero__slider").forEach((slider) => new HeroSlider(slider));
});
