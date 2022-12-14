<template>
    <v-card class="pa-4 mb-4" color="secondary">
        <!-- Harm Row -->
        <v-row>
            <v-col cols="2" class="d-flex flex-column justify-space-around align-center">
                <v-icon icon="mdi-bandage" size="large" color="primary"></v-icon>
                <v-icon icon="mdi-bandage" size="large" color="primary"></v-icon>
                <v-icon icon="mdi-bandage" size="large" color="primary"></v-icon>
            </v-col>
            <v-col cols="10">
                <!-- 3-harm row -->
                <v-row>
                    <v-col>
                        <v-col cols="12">
                            <div>Broken Butt</div>
                            <v-divider class="mt-1" color="primary" />
                            <div class="text-overline text-primary">Level 3 Harm</div>
                        </v-col>
                    </v-col>
                </v-row>
                <!-- 2-harm row -->
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-col>
                            <div>Sprained Butt</div>
                            <v-divider class="mt-1" color="primary" />
                            <div class="text-overline text-primary">Level 2 Harm</div>
                        </v-col>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-col>
                            <div>Stabbed In the Butt</div>
                            <v-divider class="mt-1" color="primary" />
                            <div class="text-overline text-primary">Level 2 Harm</div>
                        </v-col>
                    </v-col>
                </v-row>
                <!-- 1-harm row -->
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-col>
                            <div>Bruised Butt</div>
                            <v-divider class="mt-1" color="primary" />
                            <div class="text-overline text-primary">Level 1 Harm</div>
                        </v-col>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-col>
                            <div>Gnarly Buttache</div>
                            <v-divider class="mt-1" color="primary" />
                            <div class="text-overline text-primary">Level 1 Harm</div>
                        </v-col>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-divider color="primary" class="my-4"></v-divider>
        <!-- Armor and Healing Row -->
        <v-container>
            <v-row>
                <v-col cols="3" class="text-overline text-primary d-flex align-center">Armor</v-col>
                <v-col cols="9">
                    <div class="d-flex flex-wrap">
                        <v-btn class="mx-1 mb-1" size="large" color="primary"><v-icon icon="mdi-shield-off"></v-icon></v-btn>
                        <v-btn class="mx-1 mb-1" size="large" variant="outlined" color="primary"><v-icon
                                icon="mdi-shield-outline"></v-icon></v-btn>
                        <v-btn class="mx-1 mb-1" size="large" variant="outlined" color="primary"><v-icon
                                icon="mdi-shield-outline"></v-icon></v-btn>
                        <v-btn class="mx-1 mb-1" size="large" variant="outlined" color="warning"><v-icon
                                icon="mdi-shield-alert-outline"></v-icon></v-btn>
                    </div>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="3" class="text-overline text-primary d-flex align-center">Healing</v-col>
                <v-col cols="9">
                    <div class="d-flex flex-wrap">
                        <v-btn class="mx-1 mb-1" size="large" color="primary"><v-icon size="x-large"
                                icon="mdi-hospital-box"></v-icon></v-btn>
                        <v-btn class="mx-1 mb-1" size="large" variant="outlined" color="primary"><v-icon size="x-large"
                                icon="mdi-hospital-box"></v-icon></v-btn>
                        <v-btn class="mx-1 mb-1" size="large" variant="outlined" color="primary"><v-icon size="x-large"
                                icon="mdi-hospital-box"></v-icon></v-btn>
                        <v-btn class="mx-1 mb-1" size="large" variant="outlined" color="success"><v-icon size="x-large"
                                icon="mdi-hospital-box"></v-icon></v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>

    </v-card>
</template>

<script setup>

</script>