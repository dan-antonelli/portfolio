<script lang="ts">
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import type { Story } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import { StoryCardBgImage } from '$lib/data/assets';

	export let story: Story;

	$: from = story.period.from.toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	$: to = story.period.to
		? story.period.to.toLocaleDateString('en-US', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
		  })
		: 'now';
</script>

<Card
	color={story.color}
	href={`${base}/short-stories/${story.slug}`}
	bgImg={StoryCardBgImage[story.slug]}
>
	<div class="m-t-20px row justify-between items-center h-110px">
		<CardTitle title={story.name} />
	</div>
	<div
		class="row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"
	>
		<p>{story.type}</p>
	</div>
	<div class="col sm:h-100px md:h-160px">
		<p
			class="text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1 line-clamp-3"
		>
			{story.shortDescription}
		</p>
	</div>
	<div class="row justify-between text-0.8em font-400">
		<Chip>{from}</Chip>
		<div class="row flex-wrap">
			{#each story.categories as category}
				<ChipIcon logo={getAssetURL(category.logo)} name={category.name} />
			{/each}
		</div>
	</div>
</Card>
