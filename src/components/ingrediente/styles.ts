import {StyleSheet} from 'react-native';
import {theme} from '@/theme'


export const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: theme.colors.gray_200,
        borderRadius: theme.borderRadius.full,
        paddingHorizontal: 16,
        paddingVertical: 7,
        alignItems: "center",
        flexDirection: "row",
        gap: 6,
        height: 42
    },
    image:{
        width: 16,
        height: 16
    },
    title:{
        fontSize: theme.fonts.size.body.sm,
        fontFamily: theme.fonts.family.medium
    },
    selecionado:{
        borderWidth: 2,
        borderColor: theme.colors.green_600,
        borderRadius: theme.borderRadius.full,
        paddingHorizontal: 16,
        backgroundColor: theme.colors.green_100,
        paddingVertical: 7,
        alignItems: "center",
        flexDirection: "row",
        gap: 6,
        height: 42
    }

})