/**
 * for displaying specific media switcher component
 */

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/global_ui_components/ui/tabs';
import BaseJsSandbox from '../../media_components/BaseJsSandbox';


export const MEDIA_SWITCH_METHODS = {
    TAB: 'tab',
    CAROUSEL: 'carousel',
}

export const selectMediaSwitcherComponent = (switchMethod) => {
    switch (switchMethod) {
        case MEDIA_SWITCH_METHODS.TAB:
            return (
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>

                    <TabsContent value="account">

                    </TabsContent>
                    <TabsContent value="password">
                        <BaseJsSandbox
                            simCode={games[1]}
                        />
                    </TabsContent>
                </Tabs>
            )
        default:
            return null;
    }
}