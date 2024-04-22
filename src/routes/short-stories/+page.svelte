<script lang="ts">
	import { items, title } from '@data/stories';
	import { storyCategories } from '@data/skills';
	import { onMount } from 'svelte';

	import type { Story, Category } from '$lib/types';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import StoryCard from '$lib/components/StoryCard/StoryCard.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	interface CategoryFilter extends Category {
		isSelected?: boolean;
	}

	let filters: Array<CategoryFilter> = storyCategories.filter((it) => {
		return items.some((story) => story.categories.some((category) => category.slug === it.slug));
	});

	let search = '';
	let displayed: Array<Story> = [];

	const isSelected = (slug: string): boolean => {
		return filters.some((item) => item.slug === slug && item.isSelected);
	};

	const onSelected = (slug: string) => {
		filters = filters.map((category) => {
			if (category.slug === slug) {
				category.isSelected = !isSelected(slug);
			}

			return category;
		});
	};

	$: {
		displayed = items.filter((story) => {
			const isFiltered =
				filters.every((item) => !item.isSelected) ||
				story.categories.some((category) =>
					filters.some((filter) => filter.isSelected && filter.slug === category.slug)
				);

			const isSearched =
				search.trim().length === 0 ||
				story.name.trim().toLowerCase().includes(search.trim().toLowerCase());

			return isFiltered && isSearched;
		});
	}

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		search = e.detail.search;
	};

	onMount(() => {
		const query = location.search;

		if (query) {
			const queryParams = new URLSearchParams(location.search);

			const item = queryParams.get('item');

			if (item) {
				search = item;
			}
		}
	});
</script>

<SearchPage {title} on:search={onSearch}>
	<div class="stories-filters">
		{#each filters as category}
			<Chip
				active={category.isSelected}
				classes={'text-0.8em'}
				on:click={() => onSelected(category.slug)}>{category.name}</Chip
			>
		{/each}
	</div>
	{#if displayed.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="stories-list mt-5">
			{#each displayed as story}
				<StoryCard {story} />
			{/each}
		</div>
	{/if}
</SearchPage>

<style lang="scss">
	.stories-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
