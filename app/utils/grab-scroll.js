export default function enableGrabScroll(el) {
	if (!el) return;
	el = el.current;
	const directChild = el.firstElementChild;
	if (directChild && directChild.offsetWidth < el.clientWidth) return;

	el.style.justifyContent = "left";
	el.classList.add('scroll');

	const dragThreshold = 10;

	let isDown = false;
	let isDragging = false;
	let startX = 0;
	let startScrollLeft = 0;

	el.style.touchAction = "pan-y";

	el.addEventListener("pointerdown", (e) => {
		if (e.pointerType === "mouse" && e.button !== 0) return;

		isDown = true;
		isDragging = false;

		startX = e.clientX;
		startScrollLeft = el.scrollLeft;
		el.setPointerCapture(e.pointerId);
	});

	el.addEventListener(
		"pointermove",
		(e) => {
			if (!isDown) return;

			const dx = e.clientX - startX;

			if (!isDragging && Math.abs(dx) > dragThreshold) {
				isDragging = true;
			}

			if (!isDragging) return;

			e.preventDefault();
			el.scrollLeft = startScrollLeft - dx;
		},
		{ passive: false }
	);

	const stop = () => {
		isDown = false;
	};

	el.addEventListener("pointerup", stop);
	el.addEventListener("pointercancel", stop);

	// Prevent link clicks after a drag
	el.addEventListener(
		"click",
		(e) => {
			if (isDragging) {
				e.preventDefault();
				e.stopPropagation();
			}
		},
		true
	);
}
