from djangosaml2.backends import Saml2Backend

class CustomSaml2Backend(Saml2Backend):
    def _update_user(self, user, attributes, attribute_mapping, force_save=False):
        # Custom logic to process attributes
        return super()._update_user(user, attributes, attribute_mapping, force_save)
