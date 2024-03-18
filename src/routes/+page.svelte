<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, mainTitle, title, carrouselSkills } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';
	import avatar from '@images/avatar.png';

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>
<div
	class="col self-center flex-1 flex-col md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px flex justify-center items-center min-h-screen lg:-mt-10 md:-mt-15 xs-mt-0 mt-in-landscape mt-at-540"
>
	<div
		class="grid grid-cols-1 space-y-0 md:grid-cols-3 md:space-y-4 gap-y-6 md:gap-y-0 pl-at-1076 pl-at-s"
	>
		<div class="col-span-full md:col-span-1 flex items-center justify-center md:block">
			<img src={avatar} alt="avatar" class="avatar w-60 h-60" />
		</div>
		<div class="col-start-1 row-start-2 md:col-start-2 md:row-start-1" />
		<div class="col-start-1 row-start-3 md:col-start-1 md:row-start-2 md:col-span-2">
			<MainTitle classes="text-center md:text-left ">{mainTitle}</MainTitle>
			<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight">
				{description}
			</p>
			<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
				{#each links as link}
					<a
						class="decoration-none"
						href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
						target="_blank"
						rel="noreferrer"
					>
						<Icon
							icon={getPlatfromIcon(link.platform)}
							color={'var(--accent-text)'}
							size={'20px'}
						/>
					</a>
				{/each}
			</div>
		</div>
		<div class="col-start-1 row-start-4 md:col-start-3 md:row-start-2 self-center">
			<Carrousel items={carrouselSkills ?? skillsItems} />
		</div>
	</div>
</div>
