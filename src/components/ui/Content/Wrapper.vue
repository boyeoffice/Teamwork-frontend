<template>
    <div class="">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>{{ title }}</h1>
                    </div>
                    <div v-if="mainTitle" class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link :to="backUrl">{{ mainTitle }}</router-link></li>
                            <li class="breadcrumb-item active">{{ title}}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String
        },
        link: {
            required: false,
            type: String
        },
        backUrl: {
            required: false,
            type: String
        },
        mainTitle: {
            required: false,
            type: String
        },
        subTitle: {
            required: false,
            type: String
        }
    }
}
</script>
