export default function enableGrabScroll(el) {
	console.log('enablescroll');
	if (!el) return;
	// Don't bind twice
	if (el.dataset.grabScroll === "1") return;
	
	const isCoarsePointer =
		typeof window !== "undefined" &&
		window.matchMedia &&
		window.matchMedia("(pointer: coarse)").matches;

	// On touch devices, prefer native scrolling with momentum.
	if (isCoarsePointer) {
		el.style.touchAction = "auto";
		return;
	}

	const dragThreshold = 10;

	let isDown = false;
	let isDragging = false;
	let startX = 0;
	let startScrollLeft = 0;

	// Allow vertical page scroll while we handle horizontal drag.
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
