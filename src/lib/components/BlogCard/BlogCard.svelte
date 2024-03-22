<script lang="ts">
	import { countMonths, getMonthName, getTimeDiff } from '$lib/utils/helpers';
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

	$: months = countMonths(post.period.from, post.period.to);
	// $: period = `${months} month${months > 1 ? 's' : ''}`;
	$: period = `${getTimeDiff(
		post.period.from,
		post.period.to ?? new Date(Date.now() + 1000 * 60 * 60 * 24)
	)}`;
	$: from = `${getMonthName(post.period.from.getMonth())} ${post.period.from.getFullYear()}`;
	$: to = post.period.to
		? `${getMonthName(post.period.to.getMonth())} ${post.period.to.getFullYear()}`
		: 'now';
</script>

<Card color={post.color} href={`${base}/blog/${post.slug}`}>
	<CardLogo alt={post.name} src={getAssetURL(post.logo)} size={40} radius={'0'} />
	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={post.name} />
		<div class="row">
			{#each post.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
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
		{#if from !== to}
			<Chip>{to}</Chip>
		{/if}
	</div>
	<CardDivider />
	<div class="row flex-wrap">
		{#each post.skills as tech}
			<ChipIcon logo={getAssetURL(tech.logo)} name={tech.name} />
		{/each}
	</div>
</Card>
