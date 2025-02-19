import * as ImagePicker from 'expo-image-picker';

interface Photo {
    filepath: string;
    webviewPath?: string;
    base64?: string;
    width?: number;
    height?: number;
    exif?: any;
    uri?: string;
    cancelled?: boolean;
}

interface PickerOptions {
    allowsEditing?: boolean;
    aspect?: [number, number];
    quality?: number;
    base64?: boolean;
    exif?: boolean;
    uri?: boolean;
    cancelled?: boolean;
}

export function usePhotoGallery() {

    const takePhoto = async () => {
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!result.canceled) {
            return result;
        }
    }

    const pickPhoto = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!result.canceled) {
            return result;
        }
    }

    return {
        takePhoto,
        pickPhoto,
    }
}
