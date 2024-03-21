<script lang="ts">
	import { convertNamedToHexColor, type NamedColor } from '$lib/utils/colors';
	import { changeColorOpacity, isHexColor } from '@riadh-adrani/utils';
	import { onMount } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';

	import type { Project } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';

	let el: HTMLElement;

	export let color = '#ffffff00';

	export let margin = '0px';
	export let tiltDegree = 5;
	export let classes: Array<string> = [];
	export let href: undefined | string = undefined;
	export let bgImg: string | undefined = undefined;
	export let project: Project;

	$: computedColor = isHexColor(color) ? color : convertNamedToHexColor(color as NamedColor);
	$: borderColor = changeColorOpacity(computedColor, 0.5);
	$: dropColor = changeColorOpacity(computedColor, 0.15);
	$: bgColor = changeColorOpacity(computedColor, 0.01);

	$: {
		if (el) {
			el.style.setProperty('--border-color', borderColor);
			el.style.setProperty('--drop-color', dropColor);
			el.style.setProperty('--bg-color', bgColor);
		}
	}

	const onHover: MouseEventHandler<HTMLDivElement> = (ev) => {
		const target = ev.currentTarget;

		const rect = target.getBoundingClientRect();

		const x = ev.clientX - rect.left;
		const y = ev.clientY - rect.top;

		el.style.setProperty('--drop-x', `${x}px`);
		el.style.setProperty('--drop-y', `${y}px`);

		const width = el.offsetWidth;
		const height = el.offsetHeight;

		const cX = rect.x + width / 2;
		const cY = rect.y + height / 2;

		const mX = ev.clientX - cX;
		const mY = ev.clientY - cY;

		tiltDegree = window.matchMedia('(min-width: 768px)').matches ? 5 : 0;

		const rY = ((tiltDegree * mX) / (width / 2)).toFixed(2);
		const rX = ((-1 * (tiltDegree * mY)) / (height / 2)).toFixed(2);

		el.style.setProperty('--rot-x', `${rX}deg`);
		el.style.setProperty('--rot-y', `${rY}deg`);
	};

	onMount(() => {
		el.style.setProperty('margin', margin);
		el.style.setProperty('--bg-img', bgImg ? `url(${bgImg})` : '');
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={'div'}
	bind:this={el}
	on:mousemove={onHover}
	class={`card text-inherit decoration-none inline-flex flex-col border-1px border-solid border-[var(--border)] rounded-15px duration relative ${classes.join(
		' '
	)}`}
	style:bgColor={'red'}
>
	<div class="m-t-20px row justify-between items-center">
		<div class="pl-6">
			<CardTitle title={project.name} />
		</div>
		<CardDivider />
		<div class="row pr-6">
			{#each project.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>
	<div
		class="card-bg-img flex flex-col justify-center align-items-center p-25px rounded-15px w-135 h-135 md:w-135 md:h-135 position-relative"
	>
		<div class="flex flex-col justify-center items-center mb-5">
			<div class="project-img">
				<a href={project.href} target="_blank">
					<img
						title={project.shortDescription}
						src={project.img}
						alt={project.name}
						style="display: block; width: 100%; height: auto; margin: 0 auto;"
					/>
				</a>
			</div>
			<CardDivider />
		</div>
		<div class="absolute bottom-0 pb-5">
			<div class="row flex-wrap justify-start items-end">
				{#each project.skills as tech}
					<ChipIcon
						logo={getAssetURL(tech.logo)}
						name={tech.name}
						href={`${base}/skills/${tech.slug}`}
					/>
				{/each}
			</div>
		</div>
	</div>
</svelte:element>

<style lang="scss">
	.card {
		--border-color: transparent;
		--bg-color: transparent;
		--drop-color: transparent;

		--bg-img: url();

		--drop-x: 0;
		--drop-y: 0;

		--rot-x: 0;
		--rot-y: 0;

		background: linear-gradient(90deg, var(--main) 0%, var(--main) 60%, var(--main-60) 100%),
			no-repeat right 40% / 40% var(--bg-img);

		&-bg-img {
			&:hover {
				/* background-color: var(--bg-color); */
				background-image: radial-gradient(
					circle at var(--drop-x) var(--drop-y),
					/* var(--drop-color), */ transparent
				);
			}
		}

		&:hover {
			transform: perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.01);
			border-color: var(--border-hover);
		}
	}
</style>
