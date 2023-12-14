<script>
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown}/>

<div id="modal">
  <div class="modal-underlay" on:click={close}></div>
  <div class="modal-content" role="dialog" aria-modal="true" bind:this={modal}>
    <h2 aria-labelledby="modal-title" class="art-title"><slot name="title" /></h2>
    <h3 class="artist-name"><slot name="name" /></h3>
    <div class="descriptions">
      <slot />
    </div>
    <button tabIndex="0" on:click={close}>Sulje / Close</button>
  </div>
</div>