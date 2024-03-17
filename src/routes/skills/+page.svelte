<script lang="ts">
	import { title, groupByCategory } from '@data/skills';
	import { getAssetURL } from '$lib/data/assets';

	import CommonPage from '$lib/components/CommonPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';

	let result = groupByCategory('');
</script>

<CommonPage {title}>
	<div class="col gap-7">
		{#each result as group (group.category.slug)}
			<div class="col gap-5 mb-7">
				<div class="row items-center gap-5">
					<div class="bg-[var(--main-hover)] h-[1px] w-[20px]" />
					<p class="text-[var(--main-close)]">{group.category.name}</p>
					<div class="flex-1 bg-[var(--main-hover)] h-[1px]" />
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5">
					{#each group.items as skill (skill.slug)}
						<Card
							classes={['cursor-auto decoration-none']}
							tiltDegree={1}
							bgImg={getAssetURL(skill.logo)}
							color={skill.color}
						>
							<p class="text-[var(--tertiary-text)]">{skill.name}</p>
						</Card>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</CommonPage>
