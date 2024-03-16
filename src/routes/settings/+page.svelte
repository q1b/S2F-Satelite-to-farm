<script>
	import Button from '@/components/ui/button/button.svelte';
import * as Card from '@/components/ui/card';
	import Input from '@/components/ui/input/input.svelte';
	import Label from '@/components/ui/label/label.svelte';
</script>

<main class="w-full max-w-5xl flex flex-col items-center mt-16">
	<Card.Root class="max-w-80">
		<Card.Header>
			<Card.Title>Location Details</Card.Title>
			<Card.Description>
                Your Location details will be used for future easier, faster and more accurate satellite image processing.
            </Card.Description>
		</Card.Header>
		<Card.Content>
            <div>
			    <Label>Full Address</Label>
                <Input type="text" />
            </div>
		</Card.Content>
		<Card.Footer>
            <Button>Save</Button>
		</Card.Footer>
	</Card.Root>
</main>
