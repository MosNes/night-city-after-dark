<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <v-card class="pa-4 text-primary" color="secondary">
                    <Bio />
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="pa-4 text-primary" color="secondary">
                    Test
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="pa-4 text-primary" color="secondary">
                    Test
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
//Playbook imports
//Leftmost Column
import Bio from '@/components/playbook/Bio.vue'
import Stress from '@/components/playbook/Stress.vue'
import Harm from '@/components/playbook/Harm.vue'
import Rules from '@/components/playbook/Rules.vue'
//Middle Column
import PlaybookTitle from '@/components/playbook/PlaybookTitle.vue'
import Abilities from '@/components/playbook/Abilities.vue'
import Contacts from '@/components/playbook/Contacts.vue'
import PlaybookItems from '@/components/playbook/PlaybookItems.vue'
//Rightmost Column
import Money from '@/components/playbook/Money.vue'
import XP from '@/components/playbook/XP.vue'
import Skills from '@/components/playbook/Skills.vue'
import Items from '@/components/playbook/Items.vue'
//Bottom Row
import Inventory from '@/components/playbook/Inventory.vue'
import Netrunning from '@/components/playbook/Netrunning.vue'
import Cyberware from '@/components/playbook/Cyberware.vue'


</script>