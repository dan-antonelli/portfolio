<script lang="ts">
	import { getAssetURL, StoryAssets } from '$lib/data/assets';
	import { title } from '@data/stories';
	import type { Story } from '$lib/types';

	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import Banner from '$lib/components/Banner/Banner.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';

	export let data: { post?: Story };

	$: computedTitle = data.post ? `${data.post.name} - ${title}` : title;
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if data.post === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] wrapper">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load post...</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden wrapper">
			<div class="col-center p-y-2">
				<div class="text-0.9em pb-8">
					<MainTitle>{data.post.name}</MainTitle>
				</div>
				<img src={data.post.coverImage} alt="cover illustration" />
				<p class="font-300 text-center text-[var(--tertiary-text)] m-y-2">{data.post.type}</p>
			</div>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if data.post.description}
						<Markdown content={data.post.description} />
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description</p>
						</div>
					{/if}
				</div>
				<div class="w-100% m-t-8">
					<CardDivider />
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	@media (max-width: 1075px) {
		.wrapper {
			padding: 25px;
		}
	}
	.screenshot {
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100%;
		transition: background-size 200ms;

		&:hover {
			background-size: 120%;
		}
	}
</style>
