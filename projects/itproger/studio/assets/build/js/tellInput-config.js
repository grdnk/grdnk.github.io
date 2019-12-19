$("#phone").intlTelInput({
    initialCountry: "ua",
    preferredCountries: [ "ru", "ua", "by", "kz" ],
    excludeCountries: ["af", "io", "vg", "cf", "cd", "cg", "do", "gq", "gf", "pf", "gw", "mk", "mg", "mz"],
    separateDialCode: true,
});