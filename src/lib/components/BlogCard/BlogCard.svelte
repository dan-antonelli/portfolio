<script lang="ts">
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { Post } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';

	export let post: Post;

	$: from = post.period.from.toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	$: to = post.period.to
		? post.period.to.toLocaleDateString('en-US', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
		  })
		: 'now';
</script>

<Card color={post.color} href={`${base}/blog/${post.slug}`}>
	<CardLogo alt={post.name} src={getAssetURL(post.logo)} size={40} radius={'0'} />
	<div class="m-t-20px row justify-between items-center h-110px">
		<CardTitle title={post.name} />
	</div>
	<CardDivider />
	<div
		class="row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"
	>
		<p>{post.type}</p>
	</div>
	<div class="col sm:h-100px md:h-160px">
		<p
			class="text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1 line-clamp-3"
		>
			{post.shortDescription}
		</p>
	</div>
	<div class="row justify-between text-0.8em font-400">
		<Chip>{from}</Chip>
		<div class="row flex-wrap">
			{#each post.skills as tech}
				<ChipIcon logo={getAssetURL(tech.logo)} name={tech.name} />
			{/each}
		</div>
	</div>
</Card>
