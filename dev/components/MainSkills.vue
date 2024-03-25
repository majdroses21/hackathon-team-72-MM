<template>
    <v-container class="text-center">
        <h1>أختر المجال الذي تدرسة ثم اختر المهارة</h1>
        <h3>غطي احتياجاتك من المهارات في جميع التخصصات</h3>
    </v-container>
    <v-container>

        <v-row>
            <v-col lg="3" md="4" sm="6" xs="6">
                <nuxt-link to="/skills/programing">

                    <v-card class="mx-auto" max-width="200">
                        <v-img class="align-end text-white" height="200" src="/images/code.jpg" cover>
                        </v-img>

                        <v-card-text>
                            <h1 style="text-align: center;">البرمجة</h1>
                        </v-card-text>
                    </v-card>
                </nuxt-link>
            </v-col>
            <v-col lg="3" md="4" sm="6" xs="6">
                <v-card class="mx-auto" max-width="200">
                    <v-img class="align-end text-white" height="200" src="/images/ammarah.jpg" cover>
                    </v-img>

                    <v-card-text>
                        <h1 style="text-align: center;">العمارة</h1>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col lg="3" md="4" sm="6" xs="6">
                <v-card class="mx-auto" max-width="200">
                    <v-img class="align-end text-white" height="200" src="images/graphicDesign.webp" cover>
                    </v-img>

                    <v-card-text>
                        <h1 style="text-align: center;">Design</h1>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col lg="3" md="4" sm="6" xs="6">
                <v-card class="mx-auto" max-width="200">
                    <v-img class="align-end text-white" height="200" src="images/en.jpg" cover>
                    </v-img>

                    <v-card-text>
                        <h1 style="text-align: center;">اللغة الانجليزية</h1>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col lg="3" md="4" sm="6" xs="6">
                <v-card class="mx-auto" max-width="200">
                    <v-img class="align-end text-white" height="200" src="images/net.webp" cover>
                    </v-img>

                    <v-card-text>
                        <h1 style="text-align: center;">الشبكات</h1>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col lg="3" md="4" sm="6" xs="6">
                <v-card class="mx-auto" max-width="200">
                    <v-img class="align-end text-white" height="200" src="/images/kem.jpg" cover>
                    </v-img>

                    <v-card-text>
                        <h1 style="text-align: center;">الكيمياء</h1>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col lg="3" md="4" sm="6" xs="6">
                <v-card class="mx-auto" max-width="200">
                    <v-img class="align-end text-white" height="200" src="/images/zer.jpg" cover>
                    </v-img>

                    <v-card-text>
                        <h1 style="text-align: center;">الهندسة الزراعية</h1>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col lg="3" md="4" sm="6" xs="6">
                <v-card class="mx-auto" max-width="200">
                    <v-img class="align-end text-white" height="200" src="/images/markiting.png" cover>
                    </v-img>

                    <v-card-text>
                        <h1 style="text-align: center;">التسويق الاكتروني</h1>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script setup>


</script>