<template>
 <v-card class="pa-4 mb-4" color="secondary">
        <!-- Stress row -->
        <v-row>
            <v-col class="text-overline text-primary">Stress</v-col>
            <v-col>
                Stress track dots
            </v-col>
            <v-col class="d-flex flex-row-reverse">
                <v-btn class="mx-1" color="primary" variant="outlined" icon="mdi-plus-thick" size="x-small"></v-btn>
                <v-btn class="mx-1" color="primary" variant="outlined" icon="mdi-minus-thick" size="x-small"></v-btn>
            </v-col>
        </v-row>
        <v-divider color="primary" class="my-4"></v-divider>
        
        <!-- Trauma Row -->
        <v-row>
            <v-col class="text-overline text-primary" cols="3">Trauma</v-col>
            <v-col cols="9">
                <div class="d-flex flex-wrap">
                    <v-btn class="mx-1 mb-1" size="large"><v-icon icon="mdi-skull"></v-icon></v-btn>
                    <v-btn class="mx-1 mb-1" size="large"><v-icon icon="mdi-skull"></v-icon></v-btn>
                    <v-btn class="mx-1 mb-1" size="large" variant="outlined" color="primary"><v-icon icon="mdi-skull"></v-icon></v-btn>
                    <v-btn class="mx-1 mb-1" size="large" variant="outlined" color="primary"><v-icon icon="mdi-skull"></v-icon></v-btn>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup>

</script>